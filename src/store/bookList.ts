import Book from '@/api/types/book'
import { defineStore } from 'pinia'
export const useBookList = defineStore('bookList', {
  state: () => {
    const bookLis:Book[] = []

    return { bookList: bookLis }
  },
  actions: {
    cate (bookLi:Book[]) {
      this.bookList = bookLi
    }
  }
})
