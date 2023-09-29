export default function guardrail(mathFunc) {
  try {
    return [mathFunc(), 'Guardrail was processed'];
  } catch (err) {
    return [`Error: ${err.message}`, 'Guardrail was processed'];
  }
}
