import axiosInstance from "./axiosInstance"

export const getPartners = async (setPartners, setError, setLoading) => {
  try {
    const response = await axiosInstance.get("/partners")
    setPartners(response.data)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

export const editPartner = async (id, updatedItem, setError, setLoading) => {
  try {
    await axiosInstance.put(`/partners/${id}`, updatedItem)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

export const addPartner = async (newItem, setError, setLoading) => {
  try {
    const response = await axiosInstance.post("/partners", newItem)
    return response.data
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

export const deletePartner = async (id, setError, setLoading) => {
  try {
    await axiosInstance.delete(`/partners/${id}`)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}
