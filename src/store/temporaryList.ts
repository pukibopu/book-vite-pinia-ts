import { defineStore } from 'pinia'
import Book from '@/api/types/book'
import router from '@/routers/main'
import { ElMessageBox } from 'element-plus'
const temporaryBookList = defineStore('temporaryList', {
  state: () => {
    const listVal:Book[] = JSON.parse(sessionStorage.getItem('tempbooks') as string)
    return {
      tempBookList: listVal
    }
  },
  actions: {
    addBook (book:Book) {
      let flag:boolean = true
      if (this.tempBookList === null) {
        this.tempBookList = []
      }
      this.tempBookList.forEach((val, num) => {
        if (val.id === book.id) {
          flag = false
        }
      })
      // eslint-disable-next-line no-empty
      if (flag === true) {
        this.tempBookList.push(book)
        sessionStorage.setItem('tempbooks', JSON.stringify(this.tempBookList))
        router.push('/book_cart')
      } else {
        ElMessageBox.alert('您已经添加此图书至图书暂存架', '提示')
      }
    },
    removeBooks () {
      this.tempBookList = []
      sessionStorage.removeItem('tempbooks')
    },
    removeOneBook (id:number) {
      this.tempBookList = this.tempBookList.filter(item => item.id !== id)
      sessionStorage.setItem('tempbooks', JSON.stringify(this.tempBookList))
    }
  },
  getters: {
    getList ():string {
      return JSON.stringify(this.tempBookList)
    }
  }
})
export default temporaryBookList
