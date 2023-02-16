import PropTypes from 'prop-types';
import s from './options.module.css'

const Options = ({options, onLeaveFeedback
}) => {
    return (
        <>
            <ul className={s.list}>
                {options.map((element)=> {
                    return (
                        <li key={element}>
                            <button>
                                className={s.buttonEl}
                                name = { element } 
                                onClick={ onLeaveFeedback }
                            </button>
                        </li>
                    )
                
                
                })}
            </ul>
        </>
    )

}

Options.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default Options