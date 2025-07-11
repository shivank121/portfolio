import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

// Pages :-
import PublicLayoutPage from '../pages/PublicLayoutPage';
import ExperiencePage from '../pages/ExperiencePage';
import DashboardPage from '../pages/DashboardPage';
import FeedbackPage from '../pages/FeedbackPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import TechPage from '../pages/TechPage';

import MUIPage from '../pages/MUIPage';
import SkeletonPage from '../pages/SkeletonPage';
import CommonComponentPage from '../pages/CommonComponentPage';
import ErrorFallback from '../components/errorComponents/ErrorFallback';

const PublicRoutes = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset logic, like clearing state or reloading the page
        window.location.reload();
      }}
    >
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route element={<PublicLayoutPage />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            <Route path="skeleton" element={<SkeletonPage />} />
            <Route path="mui" element={<MUIPage />} />
            <Route path="common-component" element={<CommonComponentPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="feedbacks" element={<FeedbackPage />} />
            <Route path="technologies" element={<TechPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default PublicRoutes;
