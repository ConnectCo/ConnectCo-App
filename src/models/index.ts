export interface BaseResponseDTO<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
}

export interface PaiginationDTO {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  isLast: boolean;
}
