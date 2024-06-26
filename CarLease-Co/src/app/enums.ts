export enum EMPLOYEE_ROLE {
  APPLICANT = 'APPLICANT',
  REVIEWER = 'REVIEWER',
  APPROVER = 'APPROVER',
  BUSINESS_ADMIN = 'BUSINESS_ADMIN',
  SYSTEM_ADMIN = 'SYSTEM_ADMIN',
}
export enum APPLICATION_STATUS {
  DRAFT = 'DRAFT',
  PENDING = 'PENDING',
  REVIEW_APPROVED = 'REVIEW_APPROVED',
  REVIEW_DECLINED = 'REVIEW_DECLINED',
  APPROVED = 'APPROVED',
  DECLINED = 'DECLINED',
}
export enum ROUTES {
  HOME = '',
  LOGIN = 'login',
  SYS_ADMIN_VIEW = 'sysadmin-view',
  AUTOSUGGESTOR_FORM = 'autosuggestor-form',
  APPLICATIONS = 'applications',
  APPLICATION_DETAILS_BY_ID = 'applications/application-details/:id',
  APPLICATION_DETAILS = 'applications/application-details',
  NEW_APPLICATION = 'new-application',
}

export enum USER_PROPERTIES {
  SURNAME = 'surname',
  FULL_NAME = 'fullName',
  USER_ID = 'userId',
  ROLE = 'role',
  EMAIL = 'email',
  PASSWORD = 'password',
}
export enum FORM_FIELDS {
  CAR_MAKE = 'carMake',
  CAR_MODEL = 'carModel',
  LOAN_DURATION = 'loanDuration',
  MANUFACTURE_DATE = 'manufactureDate',
  NOT_SET = 'Not set',
}
