import axiosInstance from "./axiosInstance"

export const getCarouselItems = async (setCarousels, setError, setLoading) => {
  try {
    const response = await axiosInstance.get("/carousel")
    setCarousels(response.data)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

export const editCarouselItem = async (id, updatedItem, setError, setLoading) => {
  try {
    await axiosInstance.put(`/carousel/${id}`, updatedItem)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

export const addCarouselItem = async (newItem, setError, setLoading) => {
  try {
    const response = await axiosInstance.post("/carousel", newItem)
    return response.data
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

export const deleteCarouselItem = async (id, setError, setLoading) => {
  try {
    await axiosInstance.delete(`/carousel/${id}`)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}
