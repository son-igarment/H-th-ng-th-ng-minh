import React, { useState } from 'react';
import './App.css';

function Research({ onClose }) {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  
  const handleMenuChange = (menuItem) => {
    setActiveMenu(menuItem);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <span>Fund management iPlatform</span>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      
      <div className="dashboard-content">
        {/* Sidebar Menu */}
        <div className="dashboard-sidebar research-sidebar">
          <div className="sidebar-header research-header">
            <div>Research and development department</div>
          </div>
          
          <div className={`sidebar-item ${activeMenu === 'dashboard' ? 'active' : ''}`}
               onClick={() => handleMenuChange('dashboard')}>
            Dashboard
          </div>
          
          <div className={`sidebar-item ${activeMenu === 'updateData' ? 'active' : ''}`}
               onClick={() => handleMenuChange('updateData')}>
            Update data and model
          </div>
          
          <div className={`sidebar-item ${activeMenu === 'assessment' ? 'active' : ''}`}
               onClick={() => handleMenuChange('assessment')}>
            Assessment
          </div>
          
          <div className={`sidebar-item ${activeMenu === 'settings' ? 'active' : ''}`}
               onClick={() => handleMenuChange('settings')}>
            Settings
          </div>
        </div>
        
        {/* Main Content */}
        <div className="dashboard-main research-main">
          {/* Content will depend on the selected menu item */}
          {activeMenu === 'dashboard' && (
            <div className="research-dashboard">
              <h2 className="report-title">Research and Development Dashboard</h2>
              <div className="empty-content">
                <p>Select a module from the sidebar to get started</p>
              </div>
            </div>
          )}
          
          {activeMenu === 'updateData' && (
            <div className="research-data">
              <h2 className="report-title">Update Data and Model</h2>
              <div className="empty-content">
                <p>Data update tools will be displayed here</p>
              </div>
            </div>
          )}
          
          {activeMenu === 'assessment' && (
            <div className="research-assessment">
              <h2 className="report-title">Assessment Tools</h2>
              <div className="empty-content">
                <p>Assessment tools will be displayed here</p>
              </div>
            </div>
          )}
          
          {activeMenu === 'settings' && (
            <div className="research-settings">
              <h2 className="report-title">Settings</h2>
              <div className="empty-content">
                <p>Settings options will be displayed here</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Research; 