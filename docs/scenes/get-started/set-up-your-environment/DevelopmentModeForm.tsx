import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { SelectCard } from './SelectCard';

export function DevelopmentModeForm() {
  const router = useRouter();
  const { query, isReady } = router;
  const [mode, setMode] = useState<'expo-go' | 'development-build' | null>(null);

  useEffect(
    function queryDidUpdate() {
      if (isReady) {
        if (query.mode) {
          setMode(query.mode as 'expo-go' | 'development-build');
        } else {
          setMode('expo-go');
        }
      }
    },
    [query.mode, isReady]
  );

  function onRadioChange(mode: 'expo-go' | 'development-build') {
    setMode(mode);

    router.replace({
      query: {
        ...query,
        mode,
      },
    });
  }

  return (
    <div className="flex flex-wrap gap-4">
      <SelectCard
        imgSrc="/static/images/get-started/expo-go.png"
        darkImgSrc="/static/images/get-started/expo-go-dark.png"
        title="Expo Go"
        alt="Expo Go"
        isSelected={mode === 'expo-go'}
        onClick={() => onRadioChange('expo-go')}
      />
      <SelectCard
        imgSrc="/static/images/get-started/development-build.png"
        darkImgSrc="/static/images/get-started/development-build-dark.png"
        title="Development build"
        alt="Development build"
        isSelected={mode === 'development-build'}
        onClick={() => onRadioChange('development-build')}
      />
    </div>
  );
}
