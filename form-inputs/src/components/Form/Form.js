import styles from './Form.module.css'

import { useState } from 'react'

export const Form = () => {
    const [errors, setErrors] = useState({
        text: true,
        email: true,
        password: true,
        URL: true,
        search: true,
        date:true,
        localDateTime: true,
        month: true,
        week:true,
        time: true,
        color:true ,
    });
    const [data, setData] = useState({
        text: '',
        email: '',
        password: '',
        URL: '',
        search: '',
        date: '',
        localDateTime: '',
        month: '',
        week: '',
        time: '',
        number: '',
        tel: '',
        textarea: '',
        checkbox: Boolean,
        radio: '',
        color: '',
        file: File
    })


    const changeHandler = (e) => {
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const validate = (e) => {
        switch (e.target.name) {
            case 'email':
                setErrors(state => ({
                    ...state,
                    [e.target.name]: !data.email.match(/^[a-zA-Z0-9]{4,}@[a-zA-Z]+.[a-zA-Z]{2,}/)
                }))
                break
            case 'password':
                setErrors(state => ({
                    ...state,
                    'password': data.password.length < 6
                }))
                break
            case 'text':
                setErrors(state => ({
                    ...state,
                    'text': data.text.length < 6
                }))
                break
            case 'search':
                setErrors(state => ({
                    ...state,
                    'search': data.search.length < 1
                }))
                break
            case 'URL':
                setErrors(state => ({
                    ...state,
                    'URL': !data.URL.match(/^https:\/\//)
                }))
                break
            case 'date':
                setErrors(state => ({
                    ...state,
                    'date': data.date.length < 1
                }))
                break
            case 'localDateTime':
                setErrors(state => ({
                    ...state,
                    'localDateTime': data.localDateTime.length < 1
                }))
                break
            case 'month':
                setErrors(state => ({
                    ...state,
                    'month': data.month.length < 1
                }))
                break
            case 'week':
                setErrors(state => ({
                    ...state,
                    'week': data.week.length < 1
                }))
                break
            case 'time':
                setErrors(state => ({
                    ...state,
                    'time': data.time.length < 1
                }))
                break
                case 'number':
                    setErrors(state => ({
                        ...state,
                        'number': data.number.length < 1 && isNaN(Number(data.number))
                    }))
                    break
                    case 'tel':
                    setErrors(state => ({
                        ...state,
                        'tel': data.tel.length < 10 && isNaN(Number(data.tel))
                    }))
                    break
                    case 'textarea':
                setErrors(state => ({
                    ...state,
                    'textarea': data.textarea.length < 10
                }))
                break
                case 'color':
                    setErrors(state => ({
                        ...state,
                        'color': data.color.length < 1
                    }))
                    break
                    case 'file':
                        setErrors(state => ({
                            ...state,
                            'file': data.file.length < 1
                        }))
                        break

            default: break;
        }
    }
    console.log(errors);
    return (
        <div className={styles['form-container']}>
            <h1 className={styles.title}>Form Inputs</h1>
            <p className={styles.desc}>Please fill all inputs and send !</p>

            <form className={styles.form}>
                <div className={styles['text-inputs']}>
                    <p >Text inputs :</p>
                    <input type="text" placeholder='Put text' name='text' onChange={changeHandler} onBlur={(e) => validate(e)} />
                    <input type="email" placeholder='Put email' name='email' onChange={changeHandler} onBlur={(e) => validate(e)}/>
                    <input type="password" placeholder='Put password' name='password' onChange={changeHandler} onBlur={(e) => validate(e)}/>
                    <input type="url" placeholder='Put URL' name='URL' onChange={changeHandler} onBlur={(e) => validate(e)}/>
                    <input type="search" placeholder='Search something' name='search' onChange={changeHandler} onBlur={(e) => validate(e)}/>
                </div>
                <p className={styles['date-title']}>Date inputs :</p>
                <div className={styles['date-inputs']}>
                    <p>Pick Date:</p>
                    <input type="date" name='date' onChange={changeHandler} onBlur={(e) => validate(e)}/>
                    <p>Local Date:</p>
                    <input type="datetime-local" name='localDateTime' onChange={changeHandler} onBlur={(e) => validate(e)}/>
                    <p>Pick month:</p>
                    <input type="month" name='month' onChange={changeHandler} onBlur={(e) => validate(e)}/>
                    <p>Pick Week:</p>
                    <input type="week" name='week' onChange={changeHandler} onBlur={(e) => validate(e)}/>
                    <p>Pick time:</p>
                    <input type="time" name='time' onChange={changeHandler} onBlur={(e) => validate(e)}/>
                </div>
                <div className={styles['number-inputs']}>
                    <p>Number inputs :</p>
                    <input type="number" placeholder='Put a number' name='number' onChange={changeHandler} onBlur={(e) => validate(e)}/>
                    <input type="tel" placeholder='Put phone number' name='tel' onChange={changeHandler} onBlur={(e) => validate(e)}/>
                </div>
                <div className={styles['message-container']}>
                    <p>Message:</p>
                    <textarea name="textarea" id="" cols="50" rows="6" onChange={changeHandler} onBlur={(e) => validate(e)}></textarea>
                </div>
                <div className={styles['button-inputs']}>
                    <p>Button inputs :</p>
                    <div className={styles.buttons}>
                        <p>I wish to receive email</p>
                        <input type="checkbox" name='checkbox' onChange={changeHandler} />
                    </div>
                    <div className={styles.buttons}>
                        <p>Choose an option:</p>
                        <input type="radio" name='radio' onChange={changeHandler} />
                        <p >Yes</p>
                        <input type="radio" name='radio' onChange={changeHandler} />
                        <p>No</p>
                    </div>
                    <div className={styles.color}>
                        <p>Pick a colour</p>
                        <input type="color" name='color' onChange={changeHandler} onBlur={(e) => validate(e)}/>
                    </div>
                    <div className={styles.file}>
                        <input type="file" placeholder='Upload' name='file' onChange={changeHandler} onBlur={(e) => validate(e)}/>
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