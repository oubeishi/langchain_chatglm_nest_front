import request from 'ddkjutils/request'
export const api = async (data: object): Promise<any> => {
  return await request({
    ...data
  })
}
