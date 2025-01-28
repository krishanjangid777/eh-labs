class ApiResponse<T> {
    public statusCode: number;
    public data: T;
    public message: string;
    public success: boolean;
  
    constructor(statusCode: number, data: T, message = "Success") {
      this.statusCode = statusCode;
      this.data = data;
      this.message = message;
      this.success = statusCode < 400; // Success for HTTP status codes < 400
    }
  
    // Optional: Static method for creating a success response
    static success<T>(data: T, message = "Success"): ApiResponse<T> {
      return new ApiResponse(200, data, message);
    }
  
    // Optional: Static method for creating an error response
    static error<T>(statusCode: number, message: string, data: T): ApiResponse<T> {
      return new ApiResponse(statusCode, data, message);
    }
  }
  
  export { ApiResponse };