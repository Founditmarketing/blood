import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ViewHome from './views/ViewHome';
import ViewBookshelf from './views/ViewBookshelf';
import ViewBookDetail from './views/ViewBookDetail';
import ViewAbout from './views/ViewAbout';
import ViewJournal from './views/ViewJournal';
import ViewContact from './views/ViewContact';
import GeminiChat from './components/GeminiChat';

export type ViewType = 'home' | 'books' | 'book-detail' | 'about' | 'blog' | 'contact' | 'ai-curator';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [viewParams, setViewParams] = useState<Record<string, any>>({});

  const navigateTo = (view: ViewType, params: Record<string, any> = {}) => {
    // Prevent the default browser behavior by not updating the hash directly in a way that causes a reload
    setCurrentView(view);
    setViewParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // We try to update the hash silently for UX, but we don't rely on it for logic
    try {
      const url = new URL(window.location.href);
      url.hash = view + (params.bookId ? `/${params.bookId}` : '');
      window.history.pushState({}, '', url.toString());
    } catch (e) {
      console.warn("Navigation state update failed in sandbox", e);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <ViewHome onNavigate={navigateTo} />;
      case 'books':
        return <ViewBookshelf onNavigate={navigateTo} />;
      case 'book-detail':
        return <ViewBookDetail bookId={viewParams.bookId} onNavigate={navigateTo} />;
      case 'about':
        return <ViewAbout onNavigate={navigateTo} />;
      case 'blog':
        return <ViewJournal onNavigate={navigateTo} />;
      case 'contact':
        return <ViewContact onNavigate={navigateTo} />;
      case 'ai-curator':
        return <div className="pt-32 pb-20"><GeminiChat /></div>;
      default:
        return <ViewHome onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header currentView={currentView} onNavigate={navigateTo} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;