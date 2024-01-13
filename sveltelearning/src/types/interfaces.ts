export type SubmitFormEvent = SubmitEvent & {
  currentTarget: EventTarget & HTMLFormElement;
};
