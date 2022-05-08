import styled from 'styled-components'

const StyledTable = styled.table`
    border-collapse: collapse;
    margin: 15px 0;

    thead {
        background: #474955;
        color: #fff;
    }

    th {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        padding: 19px 0 16px 0;
    }

    td {
        border: 1px solid #e3e6ec;
        font-size: 13px;
        line-height: 18px;
        height: 87px;
        vertical-align: center;
    }

    tr {
        td:first-child,
        th:first-child {
            text-align: center;
            width: 10%;
        }

        td:nth-child(2),
        th:nth-child(2) {
            padding: 8px;
            width: 50%;
        }

        td:last-child,
        th:last-child {
            padding: 11px 15px;
            width: 40%;
        }
    }
`

export default StyledTable
