import styled from "styled-components";

const padding = "20px";

const ContainerWrapper = styled.div`
background: rgb(37,102,196);
background: radial-gradient(circle, rgba(37,102,196,1) 17%, rgba(23,191,203,1) 60%);
    display: flex;
    .sidebar{
        width: 300px;
        padding: ${padding};
        background:linear-gradient(to right top, rgb(5, 25, 55), rgb(26, 27, 60), rgb(43, 27, 62), rgb(58, 28, 63), rgb(72, 28, 62)) !important;};
        height: 100vh;
        min-height: 500px;
        color: white !important;
        position: sticky;
        top: 0;
        a{
            color: white !important;
            text-decoration: none;
        }
        .MuiListItemIcon-root {
            color: white !important;
        }
        .MuiListItem-button{
            margin: 10px 0;
        }
    }
    
    .rightside{
        flex: 1;
        header{
            
            position: sticky;
            top: 0;
            z-index: 1000;
            .logo{
                height: 40px
            }
        }
        .content{
            padding: ${padding};
        }
    }
`;

export default ContainerWrapper;