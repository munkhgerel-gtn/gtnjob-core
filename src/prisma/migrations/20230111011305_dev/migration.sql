-- CreateEnum
CREATE TYPE "gender_enum" AS ENUM ('no_data', 'male', 'female');

-- CreateEnum
CREATE TYPE "customer_status_enum" AS ENUM ('no_data');

-- CreateEnum
CREATE TYPE "customer_experienced_enum" AS ENUM ('no_data', 'no_work', 'have_work', 'one_company');

-- CreateEnum
CREATE TYPE "customer_statusvisa_enum" AS ENUM ('no_data');

-- CreateEnum
CREATE TYPE "language_level_enum" AS ENUM ('no_data', 'vative', 'near_native', 'business', 'daily_conversation', 'greeting');

-- CreateEnum
CREATE TYPE "job_position_enum" AS ENUM ('no_data', 'execute', 'manager', 'senior', 'staff', 'entry');

-- CreateEnum
CREATE TYPE "user_role_enum" AS ENUM ('no_data', 'gtn_super_admin', 'gtn_admin', 'company_super_admin', 'company_admin', 'company_user', 'job_seeker');

-- CreateEnum
CREATE TYPE "user_status_enum" AS ENUM ('active', 'inactive_waitverify', 'inactive_changepass', 'suspended_attempt', 'suspended_admin', 'deleted');

-- CreateEnum
CREATE TYPE "user_action_enum" AS ENUM ('no_data', 'manage', 'create', 'read', 'update', 'delete');

-- CreateEnum
CREATE TYPE "job_contractype_enum" AS ENUM ('no_data', 'full_time', 'part_time', 'contract', 'sub_contract', 'temporary', 'internship', 'other');

-- CreateEnum
CREATE TYPE "inquiry_status_enum" AS ENUM ('open', 'reply', 'closed');

-- CreateEnum
CREATE TYPE "salary_type_enum" AS ENUM ('no_data', 'hourly_wage', 'daily_wage', 'monthly_salary', 'annual_salary');

-- CreateEnum
CREATE TYPE "job_publish_enum" AS ENUM ('public', 'private');

-- CreateEnum
CREATE TYPE "employment_status_enum" AS ENUM ('employee', 'contract_employee', 'outsourcing');

-- CreateEnum
CREATE TYPE "smoke_enum" AS ENUM ('no_data', 'yes__no_smoking_on_site', 'yes__no_smoking_indoors_and_smoking_area_set_up_outdoors', 'yes__no_smoking_indoors', 'yes__smoking_room_installed_indoors', 'yes__working_in_smoking_areas', 'no_smoking_allowed');

-- CreateEnum
CREATE TYPE "filesource_enum" AS ENUM ('content_image', 'page_image', 'user', 'user_avatar', 'user_image', 'user_cv', 'user_resume', 'user_portfolio', 'user_other', 'other');

-- CreateEnum
CREATE TYPE "filetype_enum" AS ENUM ('image', 'video', 'pdf', 'gif', 'csv', 'other');

-- CreateEnum
CREATE TYPE "ReqriutmentType" AS ENUM ('direct', 'referral_company');

-- CreateTable
CREATE TABLE "action_role" (
    "action_role_id" TEXT NOT NULL,
    "controller_path" TEXT,
    "action_user" "user_action_enum" NOT NULL DEFAULT 'no_data',
    "role" "user_role_enum" NOT NULL DEFAULT 'no_data',
    "is_can" BOOLEAN NOT NULL,
    "is_company" BOOLEAN NOT NULL,
    "parent_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "action_role_pkey" PRIMARY KEY ("action_role_id")
);

-- CreateTable
CREATE TABLE "customer" (
    "customer_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "first_name_kana" TEXT NOT NULL,
    "last_name_kana" TEXT NOT NULL,
    "gender" "gender_enum" DEFAULT 'no_data',
    "birth_date" TIMESTAMP(3),
    "spouse" JSONB,
    "family_size" INTEGER,
    "email" TEXT,
    "mobile" TEXT,
    "phone" TEXT,
    "profile_image" TEXT,
    "cv_file" TEXT,
    "resume_file" TEXT,
    "prefecture" JSONB,
    "post_code" TEXT,
    "city" TEXT,
    "district" TEXT,
    "address" TEXT,
    "address1" TEXT,
    "nearest_station" TEXT,
    "socials" JSONB,
    "country" TEXT,
    "experienced_year" INTEGER,
    "from_data" INTEGER,
    "status_customer" "customer_status_enum" DEFAULT 'no_data',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "customer_desired" (
    "desired_id" TEXT NOT NULL,
    "customer_id" TEXT,
    "occupation" JSONB[],
    "industry" JSONB[],
    "location" JSONB[],
    "career_level" JSONB[],
    "contract_type" JSONB[],
    "desired_company" JSONB[],
    "time_to" TEXT NOT NULL,
    "annual_income" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "customer_desired_pkey" PRIMARY KEY ("desired_id")
);

-- CreateTable
CREATE TABLE "customer_education" (
    "education_id" TEXT NOT NULL,
    "customer_id" TEXT,
    "country" TEXT,
    "degree" JSONB,
    "entrollment_date" TIMESTAMP(3),
    "graduate_date" TIMESTAMP(3),
    "is_current" BOOLEAN,
    "school_id" INTEGER,
    "school" JSONB,
    "faculty" TEXT,
    "department" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "customer_education_pkey" PRIMARY KEY ("education_id")
);

-- CreateTable
CREATE TABLE "customer_experience" (
    "experience_id" TEXT NOT NULL,
    "jobdetail_id" TEXT NOT NULL,
    "skill_id" INTEGER NOT NULL,
    "over_year" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "customer_experience_pkey" PRIMARY KEY ("experience_id")
);

-- CreateTable
CREATE TABLE "customer_jobdetail" (
    "jobdetail_id" TEXT NOT NULL,
    "customer_id" TEXT,
    "experienced_company" INTEGER NOT NULL DEFAULT 0,
    "annual_income" INTEGER,
    "has_management_exp" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "customer_jobdetail_pkey" PRIMARY KEY ("jobdetail_id")
);

-- CreateTable
CREATE TABLE "customer_language" (
    "language_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "level" "language_level_enum" DEFAULT 'no_data',
    "language" INTEGER,
    "is_motherlanguage" BOOLEAN NOT NULL DEFAULT false,
    "certificate" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_b" TEXT,

    CONSTRAINT "customer_language_pkey" PRIMARY KEY ("language_id")
);

-- CreateTable
CREATE TABLE "customer_qualification" (
    "qualification_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "qualification" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "customer_qualification_pkey" PRIMARY KEY ("qualification_id")
);

-- CreateTable
CREATE TABLE "customer_visa" (
    "visa_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "status_visa" "customer_statusvisa_enum" DEFAULT 'no_data',
    "date_expire" TIMESTAMP(3),
    "country_citizenship" TEXT,
    "back_visafile" TEXT,
    "front_visafile" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "customer_visa_pkey" PRIMARY KEY ("visa_id")
);

-- CreateTable
CREATE TABLE "customer_workhistory" (
    "workhistory_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "company_id" TEXT,
    "company_info" JSONB,
    "occupation" JSONB,
    "industry" JSONB,
    "position" "job_position_enum" DEFAULT 'no_data',
    "enter_date" TIMESTAMP(3),
    "leave_date" TIMESTAMP(3),
    "working_month" INTEGER,
    "is_current" BOOLEAN,
    "duties" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "customer_workhistory_pkey" PRIMARY KEY ("workhistory_id")
);

-- CreateTable
CREATE TABLE "dictionary" (
    "dictionaries_id" TEXT NOT NULL,
    "dictionary_id" INTEGER NOT NULL,
    "language_code" TEXT NOT NULL,
    "dic_value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dictionary_pkey" PRIMARY KEY ("dictionaries_id")
);

-- CreateTable
CREATE TABLE "entity" (
    "entity_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "kana" TEXT,
    "logo" TEXT,
    "socials" JSONB,
    "gps" JSONB,
    "contact_person" JSONB,
    "contact_details" JSONB,
    "is_system" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "entity_pkey" PRIMARY KEY ("entity_id")
);

-- CreateTable
CREATE TABLE "entity_accountinfo" (
    "entity_accountinfo_id" TEXT NOT NULL,
    "entity_id" INTEGER,
    "bank_code" TEXT,
    "branch_code" TEXT,
    "account_id" TEXT,
    "is_default" BOOLEAN,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" TEXT,
    "created_by" TEXT,

    CONSTRAINT "entity_accountinfo_pkey" PRIMARY KEY ("entity_accountinfo_id")
);

-- CreateTable
CREATE TABLE "entity_branch" (
    "branch_id" SERIAL NOT NULL,
    "branch_name" TEXT,
    "kana" TEXT,
    "is_jeadquarter" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "prefecture" JSONB,
    "post_code" TEXT,
    "city" TEXT,
    "district" TEXT,
    "address" TEXT,
    "address1" TEXT,
    "nearest_station" TEXT,
    "socials" JSONB,
    "gps" JSONB,
    "contact_person" JSONB,
    "contact_details" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,
    "entity_id" INTEGER NOT NULL,

    CONSTRAINT "entity_branch_pkey" PRIMARY KEY ("branch_id")
);

-- CreateTable
CREATE TABLE "entity_detail" (
    "entity_detail_id" TEXT NOT NULL,
    "entity_id" INTEGER,
    "establishment" TIMESTAMP(3),
    "capital" INTEGER,
    "numberof_employees" INTEGER,
    "business_performance" JSONB,
    "representative_telephone" TEXT,
    "representative" TEXT,
    "average_age" INTEGER,
    "foreign_capitalratio" INTEGER,
    "homepage" TEXT,
    "business_summary" TEXT,
    "organizational_structure" TEXT,
    "company_sales" TEXT,
    "workplace_environment" TEXT,
    "shareholder" JSONB,
    "related_company" INTEGER,
    "recruitment_personname" TEXT,
    "memo" TEXT,
    "business_status" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "entity_detail_pkey" PRIMARY KEY ("entity_detail_id")
);

-- CreateTable
CREATE TABLE "file_uploads" (
    "file_id" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "target_id" TEXT NOT NULL,
    "file_path" TEXT NOT NULL,
    "file_type" "filetype_enum" NOT NULL,
    "fiel_source" "filesource_enum" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "file_uploads_pkey" PRIMARY KEY ("file_id")
);

-- CreateTable
CREATE TABLE "inquiry" (
    "inquire_id" TEXT NOT NULL,
    "parent_id" TEXT,
    "fromuser_id" TEXT,
    "entity_id" INTEGER,
    "assigned_user_id" TEXT,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "inquiry_status" "inquiry_status_enum",
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "is_answer" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,

    CONSTRAINT "inquiry_pkey" PRIMARY KEY ("inquire_id")
);

-- CreateTable
CREATE TABLE "job" (
    "job_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "updated_by" TEXT,
    "job_publish" "job_publish_enum" NOT NULL,
    "location_details" TEXT,
    "career_level" "job_position_enum"[],
    "benefit_other" TEXT,
    "smoke" "smoke_enum"[],
    "employment_status" "employment_status_enum" NOT NULL,
    "japanese_level" "language_level_enum" NOT NULL,
    "english_level" "language_level_enum" NOT NULL,
    "experienced_count" INTEGER NOT NULL,
    "age_min" INTEGER,
    "age_max" INTEGER,
    "set_age_reason" TEXT,
    "recruitment_type" "ReqriutmentType",
    "job_title" TEXT NOT NULL,
    "job_description" TEXT NOT NULL,
    "japanese_percentage" INTEGER,
    "must_condition" TEXT NOT NULL,
    "want_condition" TEXT,
    "position_name" TEXT,
    "working_hour" TEXT NOT NULL,
    "salary_type" "salary_type_enum" NOT NULL,
    "salary_min" INTEGER,
    "salary_max" INTEGER,
    "salary_detail" TEXT NOT NULL,
    "day_off" TEXT,
    "progress_detail" TEXT NOT NULL,
    "entity_branch_id" INTEGER NOT NULL,
    "expire_date" TIMESTAMP(3),

    CONSTRAINT "job_pkey" PRIMARY KEY ("job_id")
);

-- CreateTable
CREATE TABLE "job_other_language" (
    "job_other_language_id" TEXT NOT NULL,
    "language_id" INTEGER NOT NULL,
    "language_level" "language_level_enum" NOT NULL,
    "job_id" TEXT NOT NULL,

    CONSTRAINT "job_other_language_pkey" PRIMARY KEY ("job_other_language_id")
);

-- CreateTable
CREATE TABLE "job_reference" (
    "job_reference_id" TEXT NOT NULL,
    "job_id" TEXT NOT NULL,
    "reference_list_id" INTEGER NOT NULL,
    "reference_list_item_id" INTEGER NOT NULL,

    CONSTRAINT "job_reference_pkey" PRIMARY KEY ("job_reference_id")
);

-- CreateTable
CREATE TABLE "job_candidate" (
    "job_candidate_id" TEXT NOT NULL,
    "job_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "candidate_status" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "job_candidate_pkey" PRIMARY KEY ("job_candidate_id")
);

-- CreateTable
CREATE TABLE "job_requirement" (
    "job_require_id" TEXT NOT NULL,
    "job_id" TEXT NOT NULL,
    "require_id" INTEGER NOT NULL,
    "require_detial" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "job_requirement_pkey" PRIMARY KEY ("job_require_id")
);

-- CreateTable
CREATE TABLE "system_language" (
    "language_id" SERIAL NOT NULL,
    "language_code" TEXT NOT NULL,
    "is_default" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "system_language_pkey" PRIMARY KEY ("language_id")
);

-- CreateTable
CREATE TABLE "logger" (
    "log_id" TEXT NOT NULL,
    "action_user" "user_action_enum" NOT NULL DEFAULT 'no_data',
    "user_id" TEXT,
    "new_value" JSONB,
    "old_value" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "logger_pkey" PRIMARY KEY ("log_id")
);

-- CreateTable
CREATE TABLE "web_news" (
    "news_id" TEXT NOT NULL,
    "page_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "brief" TEXT NOT NULL,
    "image_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "is_top" BOOLEAN NOT NULL DEFAULT false,
    "is_publish" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "update_by" TEXT NOT NULL,

    CONSTRAINT "web_news_pkey" PRIMARY KEY ("news_id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "notifiation_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "is_new" BOOLEAN NOT NULL DEFAULT true,
    "is_badge" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("notifiation_id")
);

-- CreateTable
CREATE TABLE "web_pages" (
    "page_id" SERIAL NOT NULL,
    "page_name" TEXT NOT NULL,
    "page_type" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "web_pages_pkey" PRIMARY KEY ("page_id")
);

-- CreateTable
CREATE TABLE "reference_list" (
    "list_id" SERIAL NOT NULL,
    "list_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reference_list_pkey" PRIMARY KEY ("list_id")
);

-- CreateTable
CREATE TABLE "reference_listitem" (
    "listitem_id" SERIAL NOT NULL,
    "list_id" INTEGER NOT NULL,
    "dictionary_id" INTEGER NOT NULL,
    "code" TEXT,
    "listitem_value" TEXT,
    "parent_id" INTEGER,
    "value" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dictionaryDictionaries_id" TEXT,

    CONSTRAINT "reference_listitem_pkey" PRIMARY KEY ("listitem_id")
);

-- CreateTable
CREATE TABLE "scout_fav" (
    "scout_id" TEXT NOT NULL,
    "entity_id" INTEGER,
    "branch_id" INTEGER,
    "user_id" TEXT NOT NULL,
    "job_id" TEXT,
    "note" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "scout_fav_pkey" PRIMARY KEY ("scout_id")
);

-- CreateTable
CREATE TABLE "user" (
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT,
    "name" TEXT,
    "password_hash" TEXT NOT NULL,
    "role" "user_role_enum" NOT NULL DEFAULT 'no_data',
    "company_id" INTEGER NOT NULL DEFAULT 0,
    "customer_id" TEXT,
    "attemptpass_count" INTEGER DEFAULT 0,
    "reset_code" TEXT NOT NULL DEFAULT '',
    "is_emailverified" BOOLEAN NOT NULL DEFAULT false,
    "is_mobileverified" BOOLEAN NOT NULL DEFAULT false,
    "user_status" "user_status_enum" NOT NULL DEFAULT 'inactive_waitverify',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "favs" JSONB NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dictionary_dic_language_unique" ON "dictionary"("dictionary_id", "language_code");

-- CreateIndex
CREATE UNIQUE INDEX "system_language_language_code_key" ON "system_language"("language_code");

-- CreateIndex
CREATE UNIQUE INDEX "user_customer_id_key" ON "user"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_mobile_key" ON "user"("email", "mobile");

-- AddForeignKey
ALTER TABLE "customer_desired" ADD CONSTRAINT "customer_desired_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_education" ADD CONSTRAINT "customer_education_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_experience" ADD CONSTRAINT "customer_experience_jobdetail_id_fkey" FOREIGN KEY ("jobdetail_id") REFERENCES "customer_jobdetail"("jobdetail_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_experience" ADD CONSTRAINT "customer_experience_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "reference_listitem"("listitem_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_jobdetail" ADD CONSTRAINT "customer_jobdetail_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_language" ADD CONSTRAINT "customer_language_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_qualification" ADD CONSTRAINT "customer_qualification_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_visa" ADD CONSTRAINT "customer_visa_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_workhistory" ADD CONSTRAINT "customer_workhistory_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entity_accountinfo" ADD CONSTRAINT "entity_accountinfo_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "entity"("entity_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entity_branch" ADD CONSTRAINT "entity_branch_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "entity"("entity_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entity_detail" ADD CONSTRAINT "entity_detail_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "entity"("entity_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inquiry" ADD CONSTRAINT "inquiry_fromuser_id_fkey" FOREIGN KEY ("fromuser_id") REFERENCES "user"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inquiry" ADD CONSTRAINT "inquiry_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "entity"("entity_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inquiry" ADD CONSTRAINT "inquiry_assigned_user_id_fkey" FOREIGN KEY ("assigned_user_id") REFERENCES "user"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_entity_branch_id_fkey" FOREIGN KEY ("entity_branch_id") REFERENCES "entity_branch"("branch_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_other_language" ADD CONSTRAINT "job_other_language_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_reference" ADD CONSTRAINT "job_reference_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_reference" ADD CONSTRAINT "job_reference_reference_list_id_fkey" FOREIGN KEY ("reference_list_id") REFERENCES "reference_list"("list_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_reference" ADD CONSTRAINT "job_reference_reference_list_item_id_fkey" FOREIGN KEY ("reference_list_item_id") REFERENCES "reference_listitem"("listitem_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_candidate" ADD CONSTRAINT "job_candidate_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_candidate" ADD CONSTRAINT "job_candidate_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_requirement" ADD CONSTRAINT "job_requirement_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logger" ADD CONSTRAINT "logger_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "web_news" ADD CONSTRAINT "web_news_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "web_pages"("page_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reference_listitem" ADD CONSTRAINT "reference_listitem_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "reference_list"("list_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reference_listitem" ADD CONSTRAINT "reference_listitem_dictionaryDictionaries_id_fkey" FOREIGN KEY ("dictionaryDictionaries_id") REFERENCES "dictionary"("dictionaries_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scout_fav" ADD CONSTRAINT "scout_fav_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE SET NULL ON UPDATE CASCADE;
