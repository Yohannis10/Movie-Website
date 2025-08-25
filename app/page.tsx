'use client';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Movies from './pages/Movies';
import Series from './pages/Series';
import Documentaries from './pages/Documentaries';
import Login from './pages/Login';
import VideoPlayer from './pages/VideoPlayer';
import Profile from './pages/Profile'

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import MobileSidebar from './Components/MobileSidebar';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {isAuthenticated && (
          <>
            <Header  user={user} 
              onLogout={() => {
                setIsAuthenticated(false);
                setUser(null);
              }}
              onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              isMobileSidebarOpen={isMobileSidebarOpen}

              />

            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
              <Sidebar
                user={user} 
                onLogout={() => {
                  setIsAuthenticated(false);
                  setUser(null);
                }} 
              />
            </div>
            
            {/* Mobile Sidebar */}
            <MobileSidebar
              user={user}
              onLogout={() => {
                setIsAuthenticated(false);
                setUser(null);
              }}
              isOpen={isMobileSidebarOpen}
              onClose={() => setIsMobileSidebarOpen(false)}
            />
          </>
        )}
        
        <div className={isAuthenticated ? 'lg:ml-64' : ''}>
          <Routes>
            <Route 
              path="/login" 
              element={
                !isAuthenticated ? 
                  <Login onLogin={(userData) => {
                    setIsAuthenticated(true);
                    setUser(userData);
                  }} /> : 
                  <Navigate to="/" />
              } 
            />
            <Route 
              path="/signup" 
              element={
                !isAuthenticated ? 
                  <SignUp onSignUp={(userData) => {
                    setIsAuthenticated(true);
                    setUser(userData);
                  }} /> : 
                  <Navigate to="/" />
              } 
            />
            <Route 
              path="/" 
              element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/movies" 
              element={isAuthenticated ? <Movies /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/series" 
              element={isAuthenticated ? <Series /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/documentaries" 
              element={isAuthenticated ? <Documentaries /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/watch/:id" 
              element={isAuthenticated ? <VideoPlayer /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/profile" 
              element={isAuthenticated ? <Profile user={user} setUser={setUser} /> : <Navigate to="/login" />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;