const formatSuccessResponse = (data: any) => ({ success: true, data });
const formatErrorResponse = (message: string) => ({ success: false, error: message });

export default { formatSuccessResponse, formatErrorResponse };
