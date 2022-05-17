import { defineStore } from 'pinia'
import { Reader } from '@/api/types/reader'
export const useReaderStore = defineStore('readerstate', {
  state: () => {
    const readerVal:any = JSON.parse(sessionStorage.getItem('user') as string)
    return {
      reader: readerVal
    }
  },
  actions: {
    update (newReader:Reader|any) {
      this.reader = newReader
      sessionStorage.setItem('user', JSON.stringify(newReader))
    },
    removeReader () {
      this.reader = {}
      sessionStorage.setItem('user', JSON.stringify(''))
    }
  },
  getters: {
    getName ():Reader {
      return this.reader.name
    }
  }
})
