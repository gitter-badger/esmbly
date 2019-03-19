// @ts-ignore
import sw from 'spawn-wrap';
// @ts-ignore
import onExit from 'signal-exit';
import { Profiler } from '.';

const profiler = new Profiler(process.env.TMP_PATH || '');

profiler.start().then(() => {
  onExit(() => profiler.stop(), { alwaysLast: true });
  sw.runMain();
});
