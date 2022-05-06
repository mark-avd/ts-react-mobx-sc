import styled from 'styled-components'

const StyledTable = styled.table`
    border-collapse: collapse;
    margin: 15px 0;

    thead {
        background: #474955;
        color: #fff;
    }

    th {
        padding: 19px 23px 16px;
    }

    tr {
        td:first-child {
            text-align: center;
            width: 10%;
        }

        td:nth-child(2) {
            width: 50%;
            padding: 8px;
        }

        td:last-child {
            padding: 11px 15px;
        }
    }

    td {
        border: 1px solid #e3e6ec;
        vertical-align: center;
        height: 87px;
    }
`

export default StyledTable
