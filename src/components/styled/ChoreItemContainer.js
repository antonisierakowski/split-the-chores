import styled from 'styled-components';
import grey from '@material-ui/core/colors/grey'

const ChoreItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.odd ? '#EEE' : '#F7F7F7' };
    padding: 10px;

    div:first-child {
        h4 {
            margin: 4px 0;
            font-size: 18px;
            font-weight: 300;
            color: ${grey[700]};
        }
        span {
            font-size: 14px;
            color: ${grey[600]};
        }
    }

    &:hover {
        background: ${grey[300]};
    }
        
`

export default ChoreItemContainer;