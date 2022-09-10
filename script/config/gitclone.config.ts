import { exec } from 'child_process';

const gitClone = (url: string) => {
  exec(url, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.debug(`stderr: ${stderr}`);
      return;
    }
    console.debug(`stdout: ${stdout}`);
  });
};

(() => {
  const master = 'git clone https://github.com/meodai/color-names.git';

  gitClone(master);
})();
