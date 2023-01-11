
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.1
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.7.1",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ActionRoleScalarFieldEnum = makeEnum({
  action_role_id: 'action_role_id',
  controller_path: 'controller_path',
  action_user: 'action_user',
  role: 'role',
  is_can: 'is_can',
  is_company: 'is_company',
  parent_id: 'parent_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.CustomerDesiredScalarFieldEnum = makeEnum({
  desired_id: 'desired_id',
  customer_id: 'customer_id',
  occupation: 'occupation',
  industry: 'industry',
  location: 'location',
  career_level: 'career_level',
  contract_type: 'contract_type',
  desired_company: 'desired_company',
  time_to: 'time_to',
  annual_income: 'annual_income',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.CustomerEducationScalarFieldEnum = makeEnum({
  education_id: 'education_id',
  customer_id: 'customer_id',
  country: 'country',
  degree: 'degree',
  entrollment_date: 'entrollment_date',
  graduate_date: 'graduate_date',
  is_current: 'is_current',
  school_id: 'school_id',
  school: 'school',
  faculty: 'faculty',
  department: 'department',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.CustomerExperienceScalarFieldEnum = makeEnum({
  experience_id: 'experience_id',
  jobdetail_id: 'jobdetail_id',
  skill_id: 'skill_id',
  over_year: 'over_year',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.CustomerJobDetailScalarFieldEnum = makeEnum({
  jobdetail_id: 'jobdetail_id',
  customer_id: 'customer_id',
  experienced_company: 'experienced_company',
  annual_income: 'annual_income',
  has_management_exp: 'has_management_exp',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.CustomerLanguageScalarFieldEnum = makeEnum({
  language_id: 'language_id',
  customer_id: 'customer_id',
  level: 'level',
  language: 'language',
  is_motherlanguage: 'is_motherlanguage',
  certificate: 'certificate',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_b: 'updated_b'
});

exports.Prisma.CustomerQualificationScalarFieldEnum = makeEnum({
  qualification_id: 'qualification_id',
  customer_id: 'customer_id',
  qualification: 'qualification',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.CustomerScalarFieldEnum = makeEnum({
  customer_id: 'customer_id',
  first_name: 'first_name',
  last_name: 'last_name',
  first_name_kana: 'first_name_kana',
  last_name_kana: 'last_name_kana',
  gender: 'gender',
  birth_date: 'birth_date',
  spouse: 'spouse',
  family_size: 'family_size',
  email: 'email',
  mobile: 'mobile',
  phone: 'phone',
  profile_image: 'profile_image',
  cv_file: 'cv_file',
  resume_file: 'resume_file',
  prefecture: 'prefecture',
  post_code: 'post_code',
  city: 'city',
  district: 'district',
  address: 'address',
  address1: 'address1',
  nearest_station: 'nearest_station',
  socials: 'socials',
  country: 'country',
  experienced_year: 'experienced_year',
  from_data: 'from_data',
  status_customer: 'status_customer',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.CustomerVisaScalarFieldEnum = makeEnum({
  visa_id: 'visa_id',
  customer_id: 'customer_id',
  status_visa: 'status_visa',
  date_expire: 'date_expire',
  country_citizenship: 'country_citizenship',
  back_visafile: 'back_visafile',
  front_visafile: 'front_visafile',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.CustomerWorkHistoryScalarFieldEnum = makeEnum({
  workhistory_id: 'workhistory_id',
  customer_id: 'customer_id',
  company_id: 'company_id',
  company_info: 'company_info',
  occupation: 'occupation',
  industry: 'industry',
  position: 'position',
  enter_date: 'enter_date',
  leave_date: 'leave_date',
  working_month: 'working_month',
  is_current: 'is_current',
  duties: 'duties',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.DictionaryScalarFieldEnum = makeEnum({
  dictionaries_id: 'dictionaries_id',
  dictionary_id: 'dictionary_id',
  language_code: 'language_code',
  dic_value: 'dic_value',
  created_at: 'created_at'
});

exports.Prisma.EntityAccountInfoScalarFieldEnum = makeEnum({
  entity_accountinfo_id: 'entity_accountinfo_id',
  entity_id: 'entity_id',
  bank_code: 'bank_code',
  branch_code: 'branch_code',
  account_id: 'account_id',
  is_default: 'is_default',
  created_at: 'created_at',
  updated_at: 'updated_at',
  updated_by: 'updated_by',
  created_by: 'created_by'
});

exports.Prisma.EntityBranchScalarFieldEnum = makeEnum({
  branch_id: 'branch_id',
  branch_name: 'branch_name',
  kana: 'kana',
  is_jeadquarter: 'is_jeadquarter',
  image: 'image',
  prefecture: 'prefecture',
  post_code: 'post_code',
  city: 'city',
  district: 'district',
  address: 'address',
  address1: 'address1',
  nearest_station: 'nearest_station',
  socials: 'socials',
  gps: 'gps',
  contact_person: 'contact_person',
  contact_details: 'contact_details',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by',
  entity_id: 'entity_id'
});

exports.Prisma.EntityDetailScalarFieldEnum = makeEnum({
  entity_detail_id: 'entity_detail_id',
  entity_id: 'entity_id',
  establishment: 'establishment',
  capital: 'capital',
  numberof_employees: 'numberof_employees',
  business_performance: 'business_performance',
  representative_telephone: 'representative_telephone',
  representative: 'representative',
  average_age: 'average_age',
  foreign_capitalratio: 'foreign_capitalratio',
  homepage: 'homepage',
  business_summary: 'business_summary',
  organizational_structure: 'organizational_structure',
  company_sales: 'company_sales',
  workplace_environment: 'workplace_environment',
  shareholder: 'shareholder',
  related_company: 'related_company',
  recruitment_personname: 'recruitment_personname',
  memo: 'memo',
  business_status: 'business_status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.EntityScalarFieldEnum = makeEnum({
  entity_id: 'entity_id',
  name: 'name',
  kana: 'kana',
  logo: 'logo',
  socials: 'socials',
  gps: 'gps',
  contact_person: 'contact_person',
  contact_details: 'contact_details',
  is_system: 'is_system',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.FilesScalarFieldEnum = makeEnum({
  file_id: 'file_id',
  file_name: 'file_name',
  target_id: 'target_id',
  file_path: 'file_path',
  file_type: 'file_type',
  fiel_source: 'fiel_source',
  created_at: 'created_at',
  created_by: 'created_by'
});

exports.Prisma.InquiryScalarFieldEnum = makeEnum({
  inquire_id: 'inquire_id',
  parent_id: 'parent_id',
  fromuser_id: 'fromuser_id',
  entity_id: 'entity_id',
  assigned_user_id: 'assigned_user_id',
  subject: 'subject',
  body: 'body',
  inquiry_status: 'inquiry_status',
  is_read: 'is_read',
  is_answer: 'is_answer',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by'
});

exports.Prisma.JobCandidateScalarFieldEnum = makeEnum({
  job_candidate_id: 'job_candidate_id',
  job_id: 'job_id',
  customer_id: 'customer_id',
  candidate_status: 'candidate_status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.JobOtherLanguageScalarFieldEnum = makeEnum({
  job_other_language_id: 'job_other_language_id',
  language_id: 'language_id',
  language_level: 'language_level',
  job_id: 'job_id'
});

exports.Prisma.JobReferenceListScalarFieldEnum = makeEnum({
  job_reference_id: 'job_reference_id',
  job_id: 'job_id',
  reference_list_id: 'reference_list_id',
  reference_list_item_id: 'reference_list_item_id'
});

exports.Prisma.JobRequirementScalarFieldEnum = makeEnum({
  job_require_id: 'job_require_id',
  job_id: 'job_id',
  require_id: 'require_id',
  require_detial: 'require_detial',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.JobScalarFieldEnum = makeEnum({
  job_id: 'job_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by',
  job_publish: 'job_publish',
  location_details: 'location_details',
  career_level: 'career_level',
  benefit_other: 'benefit_other',
  smoke: 'smoke',
  employment_status: 'employment_status',
  japanese_level: 'japanese_level',
  english_level: 'english_level',
  experienced_count: 'experienced_count',
  age_min: 'age_min',
  age_max: 'age_max',
  set_age_reason: 'set_age_reason',
  recruitment_type: 'recruitment_type',
  job_title: 'job_title',
  job_description: 'job_description',
  japanese_percentage: 'japanese_percentage',
  must_condition: 'must_condition',
  want_condition: 'want_condition',
  position_name: 'position_name',
  working_hour: 'working_hour',
  salary_type: 'salary_type',
  salary_min: 'salary_min',
  salary_max: 'salary_max',
  salary_detail: 'salary_detail',
  day_off: 'day_off',
  progress_detail: 'progress_detail',
  entity_branch_id: 'entity_branch_id',
  expire_date: 'expire_date'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.LoggerScalarFieldEnum = makeEnum({
  log_id: 'log_id',
  action_user: 'action_user',
  user_id: 'user_id',
  new_value: 'new_value',
  old_value: 'old_value',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  updated_by: 'updated_by'
});

exports.Prisma.NewsScalarFieldEnum = makeEnum({
  news_id: 'news_id',
  page_id: 'page_id',
  title: 'title',
  brief: 'brief',
  image_id: 'image_id',
  content: 'content',
  is_top: 'is_top',
  is_publish: 'is_publish',
  created_at: 'created_at',
  updated_at: 'updated_at',
  created_by: 'created_by',
  update_by: 'update_by'
});

exports.Prisma.NotificationScalarFieldEnum = makeEnum({
  notifiation_id: 'notifiation_id',
  user_id: 'user_id',
  link: 'link',
  message: 'message',
  is_new: 'is_new',
  is_badge: 'is_badge',
  created_at: 'created_at',
  created_by: 'created_by'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.PagesScalarFieldEnum = makeEnum({
  page_id: 'page_id',
  page_name: 'page_name',
  page_type: 'page_type',
  created_at: 'created_at',
  created_by: 'created_by'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ReferenceListItemsScalarFieldEnum = makeEnum({
  listitem_id: 'listitem_id',
  list_id: 'list_id',
  dictionary_id: 'dictionary_id',
  code: 'code',
  listitem_value: 'listitem_value',
  parent_id: 'parent_id',
  value: 'value',
  created_at: 'created_at',
  updated_at: 'updated_at',
  dictionaryDictionaries_id: 'dictionaryDictionaries_id'
});

exports.Prisma.ReferenceListScalarFieldEnum = makeEnum({
  list_id: 'list_id',
  list_name: 'list_name',
  created_at: 'created_at'
});

exports.Prisma.ScoutFavScalarFieldEnum = makeEnum({
  scout_id: 'scout_id',
  entity_id: 'entity_id',
  branch_id: 'branch_id',
  user_id: 'user_id',
  job_id: 'job_id',
  note: 'note',
  created_at: 'created_at',
  created_by: 'created_by'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SystemLangaugeScalarFieldEnum = makeEnum({
  language_id: 'language_id',
  language_code: 'language_code',
  is_default: 'is_default'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  user_id: 'user_id',
  email: 'email',
  mobile: 'mobile',
  name: 'name',
  password_hash: 'password_hash',
  role: 'role',
  company_id: 'company_id',
  customer_id: 'customer_id',
  attemptpass_count: 'attemptpass_count',
  reset_code: 'reset_code',
  is_emailverified: 'is_emailverified',
  is_mobileverified: 'is_mobileverified',
  user_status: 'user_status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  favs: 'favs'
});
exports.CustomerStatus = makeEnum({
  no_data: 'no_data'
});

exports.EmploymentStatus = makeEnum({
  employee: 'employee',
  contract_employee: 'contract_employee',
  outsourcing: 'outsourcing'
});

exports.FileSource = makeEnum({
  content_image: 'content_image',
  page_image: 'page_image',
  user: 'user',
  user_avatar: 'user_avatar',
  user_image: 'user_image',
  user_cv: 'user_cv',
  user_resume: 'user_resume',
  user_portfolio: 'user_portfolio',
  user_other: 'user_other',
  other: 'other'
});

exports.FileType = makeEnum({
  image: 'image',
  video: 'video',
  pdf: 'pdf',
  gif: 'gif',
  csv: 'csv',
  other: 'other'
});

exports.Gender = makeEnum({
  no_data: 'no_data',
  male: 'male',
  female: 'female'
});

exports.InquiryStatus = makeEnum({
  open: 'open',
  reply: 'reply',
  closed: 'closed'
});

exports.JobPosition = makeEnum({
  no_data: 'no_data',
  execute: 'execute',
  manager: 'manager',
  senior: 'senior',
  staff: 'staff',
  entry: 'entry'
});

exports.JobPublish = makeEnum({
  public: 'public',
  private: 'private'
});

exports.LanguageLevel = makeEnum({
  no_data: 'no_data',
  vative: 'vative',
  near_native: 'near_native',
  business: 'business',
  daily_conversation: 'daily_conversation',
  greeting: 'greeting'
});

exports.ReqriutmentType = makeEnum({
  direct: 'direct',
  referral_company: 'referral_company'
});

exports.SalaryType = makeEnum({
  no_data: 'no_data',
  hourly_wage: 'hourly_wage',
  daily_wage: 'daily_wage',
  monthly_salary: 'monthly_salary',
  annual_salary: 'annual_salary'
});

exports.Smoke = makeEnum({
  no_data: 'no_data',
  yes__no_smoking_on_site: 'yes__no_smoking_on_site',
  yes__no_smoking_indoors_and_smoking_area_set_up_outdoors: 'yes__no_smoking_indoors_and_smoking_area_set_up_outdoors',
  yes__no_smoking_indoors: 'yes__no_smoking_indoors',
  yes__smoking_room_installed_indoors: 'yes__smoking_room_installed_indoors',
  yes__working_in_smoking_areas: 'yes__working_in_smoking_areas',
  no_smoking_allowed: 'no_smoking_allowed'
});

exports.StatusVisa = makeEnum({
  no_data: 'no_data'
});

exports.UserAction = makeEnum({
  no_data: 'no_data',
  manage: 'manage',
  create: 'create',
  read: 'read',
  update: 'update',
  delete: 'delete'
});

exports.UserRole = makeEnum({
  no_data: 'no_data',
  gtn_super_admin: 'gtn_super_admin',
  gtn_admin: 'gtn_admin',
  company_super_admin: 'company_super_admin',
  company_admin: 'company_admin',
  company_user: 'company_user',
  job_seeker: 'job_seeker'
});

exports.UserStatus = makeEnum({
  active: 'active',
  inactive_waitverify: 'inactive_waitverify',
  inactive_changepass: 'inactive_changepass',
  suspended_attempt: 'suspended_attempt',
  suspended_admin: 'suspended_admin',
  deleted: 'deleted'
});

exports.Prisma.ModelName = makeEnum({
  ActionRole: 'ActionRole',
  Customer: 'Customer',
  CustomerDesired: 'CustomerDesired',
  CustomerEducation: 'CustomerEducation',
  CustomerExperience: 'CustomerExperience',
  CustomerJobDetail: 'CustomerJobDetail',
  CustomerLanguage: 'CustomerLanguage',
  CustomerQualification: 'CustomerQualification',
  CustomerVisa: 'CustomerVisa',
  CustomerWorkHistory: 'CustomerWorkHistory',
  Dictionary: 'Dictionary',
  Entity: 'Entity',
  EntityAccountInfo: 'EntityAccountInfo',
  EntityBranch: 'EntityBranch',
  EntityDetail: 'EntityDetail',
  Files: 'Files',
  Inquiry: 'Inquiry',
  Job: 'Job',
  JobOtherLanguage: 'JobOtherLanguage',
  JobReferenceList: 'JobReferenceList',
  JobCandidate: 'JobCandidate',
  JobRequirement: 'JobRequirement',
  SystemLangauge: 'SystemLangauge',
  Logger: 'Logger',
  News: 'News',
  Notification: 'Notification',
  Pages: 'Pages',
  ReferenceList: 'ReferenceList',
  ReferenceListItems: 'ReferenceListItems',
  ScoutFav: 'ScoutFav',
  User: 'User'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
