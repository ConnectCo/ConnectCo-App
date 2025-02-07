export const generateMock = (result: unknown) => ({
  data: {
    isSuccess: true,
    code: 200,
    message: "success",
    result,
  },
});
