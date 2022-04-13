enum StatusCode {
    OK = 200,
    CREATED,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED,
    NOT_FOUND = 404,
    UNPROCESSABLE_ENTITY = 422,
    INTERNAL_SERVER_ERROR = 500,
  }
  
  export default StatusCode;
  