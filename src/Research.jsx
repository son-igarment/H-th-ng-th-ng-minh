import React, { useState } from 'react';
import './App.css';

function Research({ onClose }) {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  
  const handleMenuChange = (menuItem) => {
    setActiveMenu(menuItem);
  };

  // Sample notification data
  const notifications = [
    { id: 1, title: "Stock Prediction Alert", message: "ABC stock prediction model updated", time: "2 hours ago", read: false },
    { id: 2, title: "Risk Assessment", message: "BCD stock risk level has increased", time: "4 hours ago", read: false },
    { id: 3, title: "Data Mining Complete", message: "Historical data processed successfully", time: "Yesterday", read: true },
    { id: 4, title: "Model Training", message: "ML model training completed with 94.5% accuracy", time: "2 days ago", read: true }
  ];

  // Sample prediction data
  const predictionData = [
    { id: 1, stock: "ABC", currentPrice: 20.00, predictedPrice: 21.50, change: "+7.50%", confidence: "High" },
    { id: 2, stock: "BCD", currentPrice: 33.00, predictedPrice: 30.50, change: "-7.58%", confidence: "Medium" },
    { id: 3, stock: "EFG", currentPrice: 50.00, predictedPrice: 54.25, change: "+8.50%", confidence: "High" },
    { id: 4, stock: "XYZ", currentPrice: 15.75, predictedPrice: 16.20, change: "+2.86%", confidence: "Low" }
  ];

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
              
              <div className="research-panels">
                <div className="research-data-panel">
                  <h3>Data Analysis Overview</h3>
                  <div className="data-visualization">
                    <div className="chart-container">
                      <div className="chart-placeholder">
                        <div className="chart-bars">
                          {[40, 70, 55, 85, 30, 60, 75, 45, 65, 80].map((height, index) => (
                            <div 
                              key={index} 
                              className="chart-bar" 
                              style={{ height: `${height}%` }}
                            ></div>
                          ))}
                        </div>
                        <div className="chart-label">Stock Prediction Accuracy (%)</div>
                      </div>
                    </div>
                    
                    <div className="pie-charts">
                      <div className="pie-chart">
                        <div className="pie-chart-placeholder"></div>
                        <div className="chart-label">Asset Distribution</div>
                      </div>
                      <div className="pie-chart">
                        <div className="pie-chart-placeholder"></div>
                        <div className="chart-label">Risk Analysis</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="model-info">
                    <div className="model-stat">
                      <span className="stat-label">Prediction Models</span>
                      <span className="stat-value">4 active</span>
                    </div>
                    <div className="model-stat">
                      <span className="stat-label">Last Model Update</span>
                      <span className="stat-value">Today, 09:45 AM</span>
                    </div>
                    <div className="model-stat">
                      <span className="stat-label">Prediction Accuracy</span>
                      <span className="stat-value">92.7%</span>
                    </div>
                  </div>
                  
                  <h3 className="section-title">Price Predictions (7-day forecast)</h3>
                  <div className="prediction-table-container">
                    <table className="prediction-table">
                      <thead>
                        <tr>
                          <th>Stock</th>
                          <th className="value-col">Current Price</th>
                          <th className="value-col">Predicted Price</th>
                          <th className="value-col">Predicted Change</th>
                          <th>Confidence Level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {predictionData.map(item => (
                          <tr key={item.id}>
                            <td>{item.stock}</td>
                            <td className="value-col">{item.currentPrice.toFixed(2)}</td>
                            <td className="value-col">{item.predictedPrice.toFixed(2)}</td>
                            <td className={`value-col ${item.change.startsWith('+') ? 'profit' : 'loss'}`}>
                              {item.change}
                            </td>
                            <td className={`confidence-${item.confidence.toLowerCase()}`}>
                              {item.confidence}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="notification-panel">
                  <h3>Notifications</h3>
                  <div className="notification-list">
                    {notifications.map(notification => (
                      <div key={notification.id} className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
                        <div className="notification-title">{notification.title}</div>
                        <div className="notification-message">{notification.message}</div>
                        <div className="notification-time">{notification.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
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