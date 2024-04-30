import { useRouter } from 'next/router';
import React from 'react';

import AndroidPhysicalDevelopmentBuild from './instructions/androidPhysicalDevelopmentBuild.mdx';
import AndroidPhysicalDevelopmentBuildAndroidStudio from './instructions/androidPhysicalDevelopmentBuildAndroidStudio.mdx';
import AndroidPhysicalExpoGo from './instructions/androidPhysicalExpoGo.mdx';
import AndroidSimulatedDevelopmentBuild from './instructions/androidSimulatedDevelopmentBuild.mdx';
import AndroidSimulatedExpoGo from './instructions/androidSimulatedExpoGo.mdx';
import IosPhysicalDevelopmentBuild from './instructions/iosPhysicalDevelopmentBuild.mdx';
import IosPhysicalExpoGo from './instructions/iosPhysicalExpoGo.mdx';
import IosSimulatedDevelopmentBuild from './instructions/iosSimulatedDevelopmentBuild.mdx';
import IosSimulatedExpoGo from './instructions/iosSimulatedExpoGo.mdx';

export function DevelopmentEnvironmentInstructions() {
  const router = useRouter();
  const { query: _query } = router;

  const query = {
    platform: 'android',
    device: 'physical',
    mode: 'development-build',
    buildEnv: null,
    ..._query,
  };

  if (
    query.platform === 'android' &&
    query.device === 'physical' &&
    query.mode === 'development-build'
  ) {
    if (query.buildEnv === 'android-studio') {
      return <AndroidPhysicalDevelopmentBuildAndroidStudio />;
    }

    return <AndroidPhysicalDevelopmentBuild />;
  }

  if (query.platform === 'android' && query.device === 'physical' && query.mode === 'expo-go') {
    return <AndroidPhysicalExpoGo />;
  }

  if (
    query.platform === 'android' &&
    query.device === 'simulated' &&
    query.mode === 'development-build'
  ) {
    return <AndroidSimulatedDevelopmentBuild />;
  }

  if (query.platform === 'android' && query.device === 'simulated' && query.mode === 'expo-go') {
    return <AndroidSimulatedExpoGo />;
  }

  if (
    query.platform === 'ios' &&
    query.device === 'physical' &&
    query.mode === 'development-build'
  ) {
    return <IosPhysicalDevelopmentBuild />;
  }

  if (
    query.platform === 'ios' &&
    query.device === 'simulated' &&
    query.mode === 'development-build'
  ) {
    return <IosSimulatedDevelopmentBuild />;
  }

  if (query.platform === 'ios' && query.device === 'physical' && query.mode === 'expo-go') {
    return <IosPhysicalExpoGo />;
  }

  if (query.platform === 'ios' && query.device === 'simulated' && query.mode === 'expo-go') {
    return <IosSimulatedExpoGo />;
  }
}
