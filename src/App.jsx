import { useState } from 'react'
import FundManagement from './FundManagement'
import './App.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [domainName, setDomainName] = useState("fmp.saigonlovefund.vn");

  const handleExit = () => {
    window.close();
  };

  const handleStart = () => {
    setCurrentScreen('domain');
  };

  const handleGo = () => {
    if (domainName.trim() !== "") {
      setCurrentScreen('platform');
    }
  };

  const handleClose = () => {
    setCurrentScreen('domain');
  };

  return (
    <div className="container">
      {currentScreen === 'main' && (
        // Main screen with authors and buttons
        <>
          <h1 className="title">AUTHOR AND OWNER</h1>
          
          <div className="profiles">
            <div className="profile">
              <div className="avatar-container">
                <img src="/nguyen-xuan-hien.jpg" alt="Nguyễn Xuân Hiển" className="avatar" />
              </div>
              <h3>Nguyễn Xuân Hiển</h3>
              <p>Researcher</p>
            </div>

            <div className="profile">
              <div className="avatar-container">
                <img src="/Nguyen-Kim-Viet.jpg" alt="Nguyễn Kim Việt" className="avatar" />
              </div>
              <h3>Nguyễn Kim Việt</h3>
              <p>Researcher</p>
            </div>

            <div className="profile">
              <div className="avatar-container">
                <img src="/Pham-Le-Ngoc-Son.jpg" alt="Phạm Lê Ngọc Sơn" className="avatar" />
              </div>
              <h3>Phạm Lê Ngọc Sơn</h3>
              <p>Researcher</p>
            </div>
          </div>

          <div className="buttons">
            <button className="start-btn" onClick={handleStart}>START</button>
            <button className="exit-btn" onClick={handleExit}>EXIT</button>
          </div>
        </>
      )}

      {currentScreen === 'domain' && (
        // Domain input screen
        <>
          <h1 className="title">START RUNNING APPLICATION</h1>
          
          <div className="domain-input-container">
            <input 
              type="text" 
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
              className="domain-input"
              placeholder="Enter domain name"
            />
            <button className="go-btn" onClick={handleGo}>GO</button>
          </div>
        </>
      )}

      {currentScreen === 'platform' && <FundManagement onClose={handleClose} />}
    </div>
  )
}

export default App
