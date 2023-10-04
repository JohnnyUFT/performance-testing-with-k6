import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
          { duration: '30s', target: 50 },
          { duration: '1m', target: 100 },
          { duration: '30s', target: 50 },
          { duration: '30s', target: 0 },
        ],
        gracefulRampDown: '10s',
      },
    },
  };

export default function () {
    http.get('https://comidadibuteco.com.br');

    sleep(1);
  }
