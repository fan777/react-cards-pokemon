import { useState } from 'react'
import uuid from "uuid";
import axios from "axios";

const useFlip = (initialFlipState = true) => {
  const [isFlipped, setFlipped] = useState(initialFlipState);
  const flip = () => {
    setFlipped(flipState => !flipState)
  }
  return [isFlipped, flip]
}

const useAxios = url => {
  const [dataList, setDataList] = useState([]);
  const addData = async (restofUrl = '') => {
    console.log(`${url}${restofUrl}`)
    const response = await axios.get(`${url}${restofUrl}`);
    setDataList(dataList => [...dataList, { ...response.data, id: uuid() }])
  }
  return [dataList, addData]
}

export { useFlip, useAxios };