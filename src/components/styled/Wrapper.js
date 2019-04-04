import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const Wrapper = styled(Paper)`
    &&& {
        margin: 0 auto;
        max-width: 700px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        background: white;
        padding: 30px;
        border-radius: 8px;
        border-top-right-radius: 80px;
    }
`


export default Wrapper;
