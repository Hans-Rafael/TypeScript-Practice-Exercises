import { validateForm } from "./10_validator";

describe("validateForm", () => {
  it("should return an error if name is missing", () => {
    const result = validateForm({
      name: "",
      email: "test@example.com",
    });
    expect(result).toContain("Name is required");  // Busca el error exacto
  });

  it("should return an error if email is missing", () => {
    const result = validateForm({
      name: "Fernando",
      email: "",
    });
    expect(result).toContain("Email is invalid");  // Verifica el error exacto
  });

  it("should return an error if email is invalid", () => {
    const result = validateForm({
      name: "Fernando",
      email: "wrong.email.com",
    });
    expect(result).toContain("Email is invalid");  // Verifica el error exacto
  });

  it("should return no error if form is valid", () => {
    const result = validateForm({
      name: "Eva",
      email: "graciela@hotmail.com",
    });
    expect(result).toBe(true);  // Verifica que sea true si es válido
  });
});
