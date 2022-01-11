/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import expect from '@kbn/expect';
import { getLifecycleMethods } from '../_get_lifecycle_methods';

export default function ({ getService, getPageObjects }) {
  const clusterOverview = getService('monitoringClusterOverview');
  const instances = getService('monitoringKibanaInstances');
  const instance = getService('monitoringKibanaInstance');

  describe('Kibana instance detail', () => {
    const { setup, tearDown } = getLifecycleMethods(getService, getPageObjects);

    before(async () => {
      await setup('x-pack/test/functional/es_archives/monitoring/singlecluster_yellow_platinum', {
        from: 'Aug 29, 2017 @ 17:24:14.254',
        to: 'Aug 29, 2017 @ 17:25:44.142',
      });

      await clusterOverview.closeAlertsModal();

      // go to kibana instance
      await clusterOverview.clickKibanaInstances();
      expect(await instances.isOnInstances()).to.be(true);

      await instances.clickRowByName('tsullivan.local');

      expect(await instance.isOnInstance()).to.be(true);
    });

    after(async () => {
      await tearDown();
    });

    it('should have Instance Summary Status showing correct info', async () => {
      expect(await instance.getSummary()).to.eql({
        transportAddress: 'Transport Address\ntsullivan.local:5601',
        osFreeMemory: 'OS Free Memory\n1.5 GB',
        version: 'Version\n7.0.0-alpha1',
        uptime: 'Uptime\n3 minutes',
        health: 'Health: green',
      });
    });
  });
}