export const generateMock = (result: unknown) => ({
  isSuccess: true,
  code: 200,
  message: "success",
  result,
});
