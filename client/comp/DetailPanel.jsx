import React from 'react';
import PropTypes from 'prop-types';
import { DP } from './style.jsx'

// this react element is merely to provide panel in which user can scroll up and down
// the position within this panel is referenced in other modules

const DetailPanel = React.forwardRef(
  function dp({ twoActionsOnScroll }, ref) {
    return (
      <DP id="detailpanel" ref={ref} onScroll={twoActionsOnScroll}>
        <div className="ov">
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/2.png" 
              alt="overview 1/2" loading="lazy" width="100%"/>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/3.png" 
              alt="overview 2/2" loading="lazy" width="100%"/>
        </div>
        <div className="ff">
          <h2 style={{paddingLeft: '10px'}}>Facts and features</h2>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/4.png" 
              alt="facts and features 1/2" loading="lazy" width="100%"/>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/5.png" 
              alt="facts and features 2/2" loading="lazy" width="100%"/>
        </div>
        <div className="hv">
          <h3>Jialu&apos;s Module</h3>
        </div>
        <div className="pth">
          <h2 style={{paddingLeft: '10px'}}>Price and tax history</h2>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/6.png" 
              alt="price and tax history 1/2" loading="lazy" width="100%"/>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/7.png" 
              alt="price and tax history 2/2" loading="lazy" width="100%"/>
        </div>
        <div className="mc">
          <h2 style={{paddingLeft: '10px'}}>Monthly Cost</h2>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/8.png" 
              alt="monthly cost 1/3" loading="lazy" width="100%"/>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/9.png" 
              alt="montly cost 2/3" loading="lazy" width="100%"/>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/10.png" 
              alt="monthly cost 3/3" loading="lazy" width="100%"/>
        </div>
        <div className="rv">
          <h2 style={{paddingLeft: '10px', paddingBottom: '25px', borderBottom: '1px solid #DCDCDC'}}>Rental Value</h2>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/11.png" 
              alt="rental value 1/1" loading="lazy" width="100%"/>
        </div>
        <div className="ns">
          <h2 style={{paddingLeft: '10px'}}>Nearby Schools</h2>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/12.png" 
              alt="nearby schools 1/2" loading="lazy" width="100%"/>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/13.png" 
              alt="nearby schools 2/2" loading="lazy" width="100%"/>
        </div>
        <div className="ct">
          <h2 style={{paddingLeft: '10px'}}>Commute Time</h2>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/14.png" 
              alt="nearby school 1/1" loading="lazy" width="100%"/>
        </div>
        <div className="nh">
          <h3>Shreeya&apos;s Module</h3>
        </div>
        <div className="hfy">
          <h3 style={{paddingLeft: '10px'}}>Homes for you</h3>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/15.png" 
              alt="home for you 1/2" loading="lazy" width="100%"/>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/16.png" 
              alt="home for you 1/2" loading="lazy" width="100%"/>
        </div>
        <div className="sh">
          <h3 style={{paddingLeft: '10px'}}>Similar Homes</h3>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/17.png" 
              alt="similar homes 1/1" loading="lazy" width="100%"/>
        </div>
        <div className="lpb">
          <h3 style={{paddingLeft: '10px'}}>Listing provided by</h3>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/18.png" 
              alt="listings provided by 1/1" loading="lazy" width="100%"/>
        </div>
        <div >
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/19.png" 
              alt="footer 1/3" loading="lazy" width="100%"/>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/20.png"
              alt="footer 2/3" loading="lazy" width="100%"/>
          <img src="https://zillowclone.s3-us-west-1.amazonaws.com/21.png"
              alt="footer 3/3" loading="lazy" width="100%"/>
        </div>
      </DP>
    );
  }
)

DetailPanel.propTypes = {
  twoActionsOnScroll: PropTypes.func
}

export default DetailPanel;
