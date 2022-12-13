import CalcStyles from '../styles/CalcStyles.module.scss'
function Calc() {
    function validateFormWithJS() {
        const name = document.querySelector('#name').value
        const rollNumber = document.querySelector('#rollNumber').value

        if (!name) {
            alert('Please enter your name.')
            return false
        }

        if (rollNumber.length < 3) {
            alert('Roll Number should be at least 3 digits long.')
            return false
        }
    }
    return (
        <div>
            <form onSubmit={validateFormWithJS()} className={CalcStyles.block}>
                <div className={CalcStyles.body}>
                    <div className={CalcStyles.item}>
                        Выбор ниши
                        <div className={CalcStyles.radioGroup}>
                            <input type="text" name="rollNumber" id="rollNumber" />
                            <input type="text" name="name" id="name" />
                            <button type="submit">Submit</button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )


}


export default Calc
