import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Image from './news2.jpg';
import Footer from './Footer';

function MoreNews() {
    return <div style={{textAlign:'center',marginTop:'60px'}}>MoreNews
       <h2>Detailed News</h2>
       <Container>
           <Row xs="12" md="12" sm="12" lg="12">
               <img  alt="" src={Image} width="400" height="500" className="news-image"/>
               <Col>
               <p>Omoro County MP, Mr Jacob Oulanyah is the next Speaker of Parliament after he was declared winner of the elections held during the first sitting of the 11th Parliament at Kololo, Kampala on Monday.

                Mr Oulanyah got 310 votes, beating Kamuli Woman MP and former Speaker, Ms Rebecca Kadaga who got 197 votes. </p>
                <p>Kira Municipality MP, Ibrahim Ssemujju became a distant 3rd with 15 votes.

                 Ms Kadaga has been at the helm of Parliament leadership for the last 20 years, 10 of which she was Deputy Speaker before she replaced Mr Edward Kiwanuka Ssekandi as Speaker of the House, after he was appointed Vice President. 

                The first sitting of the 11th Parliament was chaired by Chief Justice Alfonse Owiny-Dollo and attended by President Museveni.</p>
               </Col>
           </Row>
       </Container>
       <Footer />
    </div>
    ;
}
 
export default MoreNews;