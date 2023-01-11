import styles from './Form.module.css'


export const Form = () => {
    return (
        <div className={styles['form-container']}>
            <h1 className={styles.title}>Form Inputs</h1>
            <p className={styles.desc}>Please fill all inputs and send !</p>

            <form className={styles.form}>
                <div className={styles['text-inputs']}>
                    <p >Text inputs :</p>
                    <input type="text" placeholder='Put text' />
                    <input type="email" placeholder='Put email' />
                    <input type="password" placeholder='Put password' />
                    <input type="url" placeholder='Put URL' />
                    <input type="search" placeholder='Search something' />
                </div>
                <p className={styles['date-title']}>Date inputs :</p>
                <div className={styles['date-inputs']}>
                    <p>Pick Date:</p>
                    <input type="date" />
                    <p>Local Date:</p>
                    <input type="datetime-local" />
                    <p>Pick month:</p>
                    <input type="month" />
                    <p>Pick Week:</p>
                    <input type="week" />
                    <p>Pick time:</p>
                    <input type="time" />
                </div>
                <div className={styles['number-inputs']}>
                    <p>Number inputs :</p>
                    <input type="number" placeholder='Put a number' />
                    <input type="tel" placeholder='Put phone number' />
                </div>
                <div className={styles['message-container']}>
                    <p>Message:</p>
                    <textarea name="info" id="" cols="50" rows="6" ></textarea>
                </div>
                <div className={styles['button-inputs']}>
                    <p>Button inputs :</p>
                    <div className={styles.buttons}>
                        <p>I wish to receive email</p>
                        <input type="checkbox" />
                    </div>
                    <div className={styles.buttons}>
                        <p>Choose an option:</p>
                        <input type="radio" name='yes' />
                        <p >Yes</p>
                        <input type="radio" name='no' />
                        <p>No</p>
                    </div>
                    <div className={styles.color}>
                        <p>Pick a colour</p>
                        <input type="color" />
                    </div>
                    <div className={styles.file}>
                        <input type="file" placeholder='Upload' />
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles['control-btns']}>
                    <input type="submit" />
                    <input type="reset" />
                </div>
            </form>
        </div>
    )
}