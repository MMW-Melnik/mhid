import { FC, ReactNode } from 'react'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './toast.module.scss'

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
				theme='dark'
        rtl={false}
				transition={Slide}
        pauseOnFocusLoss
        toastClassName={styles.toast}
        bodyClassName={styles.toast}
        progressClassName={styles.progress}
      />
    </>
  )
}