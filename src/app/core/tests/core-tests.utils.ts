import { ButtonConfiguration } from './../model/button-configuration.model';

export function buildButtonConfiguration(): ButtonConfiguration[] {
  const buttonConfigurations: ButtonConfiguration[] = [];

  for (let i = 0; i < 9; i++) {
    buttonConfigurations.push({
      id: i + 1,
      label: '',
      type: '',
      value: '',
      cssIdentifier: '',
    });
  }
  return buttonConfigurations;
}
