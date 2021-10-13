import styles from './Sidebar.module.css'

function Sidebar({ isOpen, onClose, children }) {
  return (
    <>
      { isOpen && <div className={styles.sidebar}>
        <div className={styles.sidebar__overlay} onClick={onClose}/>
        <div className={styles.sidebar__container}>
          <div className={styles.sidebar__controls}>
            <button className={styles.sidebar__close} type="button" onClick={onClose} />
          </div>
          { children }
        </div>
      </div>}
    </>
  )
}

export default Sidebar

