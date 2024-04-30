import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { Switch } from '~/ui/components/Switch';
import { P } from '~/ui/components/Text';

type Props = {
  type: 'android-studio' | 'xcode';
};

export function BuildEnvironmentSwitch({ type }: Props) {
  const router = useRouter();
  const { query, isReady } = router;
  const [buildEnv, setBuildEnv] = useState<'android-studio' | 'xcode' | null>(null);

  useEffect(
    function queryDidUpdate() {
      if (isReady) {
        if (query.buildEnv) {
          setBuildEnv(query.buildEnv as 'android-studio' | 'xcode');
        }
      }
    },
    [query.buildEnv, isReady]
  );

  function onSwitchChange(isOn: boolean) {
    if (isOn) {
      setBuildEnv(type);

      router.push(
        {
          query: {
            ...query,
            buildEnv: type,
          },
        },
        undefined,
        { shallow: true }
      );
    } else {
      setBuildEnv(null);

      const _query = query;
      delete _query.buildEnv;
      router.push(
        {
          query: _query,
        },
        undefined,
        { shallow: true }
      );
    }
  }

  return (
    <div className="flex gap-1.5 items-center">
      <Switch onChange={onSwitchChange} value={buildEnv === type} />
      {type === 'android-studio' ? <P>Build locally with Android Studio</P> : null}
      {type === 'xcode' ? <P>Build locally with Xcode</P> : null}
    </div>
  );
}
