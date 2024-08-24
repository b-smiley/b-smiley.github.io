import { devProdRoute } from "./utils";

export function navigateToMain() {
  window.location.href = devProdRoute();
}
