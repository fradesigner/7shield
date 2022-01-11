/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { Ensure, SerializableRecord } from '@kbn/utility-types';

export type Size = Ensure<
  {
    width: number;
    height: number;
  },
  SerializableRecord
>;

export type LayoutParams = Ensure<
  {
    id: string;
    dimensions?: Size;
  },
  SerializableRecord
>;