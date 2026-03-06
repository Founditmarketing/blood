import React, { useState, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loaded views for Code Splitting via React.lazy
const ViewHome = lazy(() => import('./views/ViewHome'));
const ViewBookshelf = lazy(() => import('./views/ViewBookshelf'));
const ViewBookDetail = lazy(() => import('./views/ViewBookDetail'));
const ViewAbout = lazy(() => import('./views/ViewAbout'));
const ViewJournal = lazy(() => import('./views/ViewJournal'));
const ViewContact = lazy(() => import('./views/ViewContact'));
const GeminiChat = lazy(() => import('./components/GeminiChat'));

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
        return <ViewHome key="home" onNavigate={navigateTo} />;
      case 'books':
        return <ViewBookshelf key="books" onNavigate={navigateTo} />;
      case 'book-detail':
        return <ViewBookDetail key={`detail-${viewParams.bookId}`} bookId={viewParams.bookId} onNavigate={navigateTo} />;
      case 'about':
        return <ViewAbout key="about" onNavigate={navigateTo} />;
      case 'blog':
        return <ViewJournal key="blog" onNavigate={navigateTo} />;
      case 'contact':
        return <ViewContact key="contact" onNavigate={navigateTo} />;
      case 'ai-curator':
        return <div key="chat" className="pt-32 pb-20"><GeminiChat /></div>;
      default:
        return <ViewHome key="home-default" onNavigate={navigateTo} />;
    }
  };

  // Minimal loading fallback for Suspense
  const FallbackLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-t-2 border-r-2 border-amber-900 animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfcf8] relative">
      {/* Cinematic Film Grain Overlay added here */}
      <div className="film-grain"></div>

      <Header currentView={currentView} onNavigate={navigateTo} />

      <main className="flex-grow">
        <Suspense fallback={<FallbackLoader />}>
          <AnimatePresence mode="wait">
            {renderView()}
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;