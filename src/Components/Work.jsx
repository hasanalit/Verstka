import styled from "styled-components";
import Oclock from '../Assets/Images/oclock.png'
import Ewer from '../Assets/Images/everywhere.png'
import Security from '../Assets/Images/security.png'
import File from '../Assets/Images/file.png'

function Work(){
    return(
        <Wrapper>
            <ul className="list">
                <li className="item">
                    <img className="work-img" src={Ewer} alt="Ewer-img" />
                    <h4 className="work-heading">Access your files, anywhere</h4>
                    <p className="work-desc">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                </li>
                <li className="item">
                    <img className="work-img" src={Security} alt="Security-img" />
                    <h4 className="work-heading">Security you can trust</h4>
                    <p className="work-desc">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                </li>
                <li className="item">
                    <img className="work-img" src={Oclock} alt="work-img" />
                    <h4 className="work-heading">Real-time collaboration</h4>
                    <p className="work-desc">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                </li>
                <li className="item">
                    <img className="work-img" src={File} alt="file-img" />
                    <h4 className="work-heading">Store any type of file</h4>
                    <p className="work-desc">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                </li>
            </ul>
        </Wrapper>
    );
}

export default Work;


const Wrapper = styled.div`

.list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    margin-top: 158px;
    /* margin-right: -74px; */
    padding: 0;
    width: 1200px;
    list-style: none;
}

.item {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 147px;
    width: 384px;
}

.work-heading {
    margin: 16px 0px 9px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;;
    font-style: normal;
}

.work-desc {
    margin: 0;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    text-align: center;
}
`