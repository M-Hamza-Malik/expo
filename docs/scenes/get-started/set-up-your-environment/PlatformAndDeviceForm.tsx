import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { SelectCard } from './SelectCard';

export function PlatformAndDeviceForm() {
  const router = useRouter();
  const { query, isReady } = router;
  const [platform, setPlatform] = useState<'android' | 'ios' | null>(null);
  const [device, setDevice] = useState<'physical' | 'simulated' | null>(null);

  useEffect(
    function queryDidUpdate() {
      if (isReady) {
        if (query.platform) {
          setPlatform(query.platform as 'android' | 'ios');
        } else {
          setPlatform('android');
        }
        if (query.device) {
          setDevice(query.device as 'physical' | 'simulated');
        } else {
          setDevice('physical');
        }
      }
    },
    [query.platform, query.device, isReady]
  );

  function onRadioChange(platform: 'android' | 'ios', device: 'physical' | 'simulated') {
    setPlatform(platform);
    setDevice(device);

    router.push(
      {
        query: {
          ...query,
          platform,
          device,
        },
      },
      undefined,
      { shallow: true }
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-wrap gap-4">
        <SelectCard
          imgSrc="/static/images/get-started/android-device.png"
          darkImgSrc="/static/images/get-started/android-device-dark.png"
          title="Android device"
          alt="Android device"
          isSelected={platform === 'android' && device === 'physical'}
          onClick={() => onRadioChange('android', 'physical')}
        />
        <SelectCard
          imgSrc="/static/images/get-started/ios-device.png"
          darkImgSrc="/static/images/get-started/ios-device-dark.png"
          title="iOS device"
          alt="iOS device"
          isSelected={platform === 'ios' && device === 'physical'}
          onClick={() => onRadioChange('ios', 'physical')}
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <SelectCard
          imgSrc="/static/images/get-started/android-emulator.png"
          darkImgSrc="/static/images/get-started/android-emulator-dark.png"
          title="Android emulator"
          alt="Android emulator"
          isSelected={platform === 'android' && device === 'simulated'}
          onClick={() => onRadioChange('android', 'simulated')}
        />
        <SelectCard
          imgSrc="/static/images/get-started/ios-simulator.png"
          darkImgSrc="/static/images/get-started/ios-simulator-dark.png"
          title="iOS simulator"
          alt="iOS simulator"
          isSelected={platform === 'ios' && device === 'simulated'}
          onClick={() => onRadioChange('ios', 'simulated')}
        />
      </div>
    </div>
  );
}
