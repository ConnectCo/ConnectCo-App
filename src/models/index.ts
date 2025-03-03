export interface BaseResponseDTO<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
}

export interface MutationResponseDTO<T> {
  data: BaseResponseDTO<T>;
}
