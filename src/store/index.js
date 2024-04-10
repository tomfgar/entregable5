import { configureStore } from '@reduxjs/toolkit'
import trainer from './states/trainer.slice.js'

export default configureStore({
  reducer:{
    trainer
  }
})